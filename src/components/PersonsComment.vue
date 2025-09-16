<template>
  <article class="comment">
    <div class="avatar" :title="author">
      {{ initials }}
    </div>

    <div class="comment-body">
      <div class="comment-meta">
        <span class="author">@{{ author }}</span>
        <span class="sep">•</span>
        <span class="movie">{{ movie }}</span>
        <span class="sep">•</span>
        <span class="time">{{ timeAgo }}</span>
      </div>

      <p class="comment-text">{{ content }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "PersonsComment",
  props: {
    author: { type: String, required: true },     // username autora komentara
    movie: { type: String, required: true },      // naslov filma koji je komentarisao
    time: { type: String, required: true },       // ISO string ili timestamp
    content: { type: String, required: true },    // sam komentar
  },
  computed: {
    initials() {
      // uzmemo prva slova username-a (ili reči u imenu), radi avatara
      if (!this.author) return "?";
      const parts = this.author.replace(/[_.-]/g, " ").split(" ");
      return (parts[0][0] || "").toUpperCase() + (parts[1] ? (parts[1][0] || "").toUpperCase() : "");
    },
    timeAgo() {
      // jednostavan "time since" (npr. "2h", "3d", ili datum)
      const t = new Date(this.time);
      if (isNaN(t)) return this.time;
      const now = new Date();
      const secs = Math.floor((now - t) / 1000);
      if (secs < 60) return `${secs}s`;
      const mins = Math.floor(secs / 60);
      if (mins < 60) return `${mins}m`;
      const hrs = Math.floor(mins / 60);
      if (hrs < 24) return `${hrs}h`;
      const days = Math.floor(hrs / 24);
      if (days < 30) return `${days}d`;
      // za starije prikazati lokalni datum
      return t.toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.comment {
  display: flex;
  gap: 0.75rem;
  padding: 0.9rem;
  background: #141414;
  border: 1px solid #222;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  align-items: flex-start;
}

.avatar {
  min-width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2b2b2b, #383838);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e6e6e6;
  font-weight: 700;
  font-size: 0.95rem;
  border: 1px solid #333;
}

.comment-body {
  flex: 1;
}

.comment-meta {
  font-size: 0.85rem;
  color: #cfcfcf;
  margin-bottom: 0.4rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.author {
  font-weight: 600;
  color: #ffffff;
}

.movie {
  color: #a8d08a; /* blagi zeleni akcenat */
  font-weight: 600;
}

.sep {
  color: #666;
}

.time {
  color: #8f8f8f;
  font-size: 0.8rem;
}

.comment-text {
  margin: 0;
  color: #ddd;
  line-height: 1.4;
}
</style>